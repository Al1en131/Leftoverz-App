"use client";

import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type RawTransaction = {
  id: number;
  buyer_id: number;
  seller_id: number;
  item_id: number;
  payment_method: "COD" | "e-wallet" | "bank transfer";
  status: "pending" | "paid" | "cancelled" | null;
  created_at: string;
  awb: string;
  courir: string;
  item?: {
    name: string;
    image: string[];
    price: number;
  };
  buyer?: { name: string };
  seller?: { name: string };
};

type Transaction = RawTransaction & {
  item_name: string;
  buyer_name: string;
  seller_name: string;
  image: string[];
};

export default function Products() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [dateString, setDateString] = useState({
    day: "",
    fullDate: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const filteredTransactions = transactions.filter(
    (item) =>
      item.item_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.buyer_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.seller_name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);

  const paginatedTransactions = filteredTransactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.replace("/auth/login");
    } else {
      setIsLoading(false);
    }
  }, [router]);

  useEffect(() => {
    const now = new Date();
    const optionsDay: Intl.DateTimeFormatOptions = { weekday: "long" };
    const optionsDate: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "short",
      year: "numeric",
    };

    const day = now.toLocaleDateString("en-US", optionsDay);
    const fullDate = now.toLocaleDateString("en-GB", optionsDate);

    setDateString({ day, fullDate });
  }, []);

  const getStatusColor = (status: string | null) => {
    switch (status) {
      case "success":
        return "bg-green-700";
      case "capture":
        return "bg-yellow-500";
      case "failed":
        return "bg-red-700";
      default:
        return "bg-gray-500";
    }
  };

  const fetchTransactions = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Token not found");

      const response = await fetch(
        "https://backend-leftoverz-production.up.railway.app/api/v1/transactions",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch transactions");
      }

      const data: { transactions: RawTransaction[] } = await response.json();

      const mappedTransactions: Transaction[] = data.transactions.map(
        (transaction) => {
          const imageData = transaction.item?.image;

          let imageArray: string[] = [];

          if (typeof imageData === "string") {
            try {
              imageArray = JSON.parse(imageData);
            } catch {
              imageArray = [imageData];
            }
          } else if (Array.isArray(imageData)) {
            imageArray = imageData;
          }

          return {
            ...transaction,
            item_name: transaction.item?.name || "Unknown",
            price: transaction.item?.price,
            buyer_name: transaction.buyer?.name || "Unknown",
            seller_name: transaction.seller?.name || "Unknown",
            image: imageArray,
          };
        }
      );

      setTransactions(mappedTransactions);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error fetching transactions:", error.message);
      } else {
        console.error("An unknown error occurred:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  if (loading || isLoading) {
    return (
      <div className="min-h-screen bg-[#060B26] flex justify-center items-center text-white">
        <div className="spinner"></div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-[#060B26] text-white px-6 py-6 relative">
      <Image
        width={100}
        height={100}
        alt="Admin"
        src="/images/admin.png"
        className="w-full absolute right-0 top-0 h-full mb-0"
      />
      <div className="flex justify-between items-center mb-7 relative z-20">
        <h1 className="text-3xl font-bold">Transactions</h1>
        <div className="relative flex justify-end gap-4 w-full">
          <div className="block">
            <p>{dateString.day}</p>
            <p>{dateString.fullDate}</p>
          </div>
        </div>
      </div>

      <div className="mb-6 z-20">
        <div
          className="relative rounded-lg flex justify-between items-center z-40 text-start shadow-lg"
          style={{
            background:
              "linear-gradient(to bottom right, rgba(6, 11, 38, 0.74), rgba(26, 31, 55, 0.5))",
          }}
        >
          <div className="absolute inset-0 opacity-40 rounded-lg"></div>
          <div className="relative z-10 text-white p-6">
            <span className="text-sm font-normal">Welcome back,</span>
            <h2 className="text-xl font-semibold mb-1">Superadmin Leftoverz</h2>
            <p className="text-sm text-gray-300">
              Glad to see you again! Ask me anything.
            </p>
            <Link
              href="/admin/"
              className="mt-4 text-white text-sm flex items-center gap-2"
            >
              Tap to dashboard →
            </Link>
          </div>
          <div className="z-10">
            <Image
              src="/images/buy.png"
              alt="Welcome"
              width={300}
              height={300}
              className="rounded-lg absolute right-0 h-56 w-56 -top-10"
            />
          </div>
        </div>
      </div>

      <div
        className="relative overflow-x-auto rounded-lg"
        style={{
          background:
            "linear-gradient(to bottom right, rgba(6, 11, 38, 0.74), rgba(26, 31, 55, 0.5))",
        }}
      >
        <div className="px-6 pt-5 pb-8 flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold">Transaction List</h3>
            <p>List of all transactions</p>
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <div className="relative flex-1 min-w-[200px] max-w-md">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-4 py-2 rounded text-white placeholder-gray-400 bg-transparent focus:outline-none"
              />
              <Search
                className="absolute top-2.5 right-3 text-gray-400"
                size={18}
              />
            </div>
          </div>
        </div>

        <table className="w-full rounded-lg my-4 max-lg:px-6 overflow-hidden">
          <thead className="text-white text-md">
            <tr className="border-b-2 border-[#56577A]">
              <th className="px-3 py-3 text-center">No.</th>
              <th className="px-3 py-3 text-left">Product Name</th>
              <th className="px-3 py-3 text-left">Buyer</th>
              <th className="px-3 py-3 text-left">Seller</th>
              <th className="px-3 py-3 text-center">Payment Method</th>
              <th className="px-3 py-3 text-center">Price</th>
              <th className="px-3 py-3 text-center">Kurir</th>
              <th className="px-3 py-3 text-center">No. Resi</th>
              <th className="px-3 py-3 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {paginatedTransactions.map((item, index) => (
              <tr
                key={item.id}
                className="transition border-b border-[#56577A]"
              >
                <td className="px-3 py-4 text-white text-center">
                  {(currentPage - 1) * itemsPerPage + index + 1}
                </td>
                <td className="px-3 py-4 text-white text-left">
                  {item.item_name}
                </td>
                <td className="px-3 py-4 text-white text-left">
                  {item.buyer_name && item.buyer_name.length > 25
                    ? item.buyer_name.slice(0, 25) + "..."
                    : item.buyer_name}
                </td>
                <td className="px-3 py-4 text-white text-left">
                  {item.seller_name}
                </td>
                <td className="px-3 py-4 text-white capitalize text-center">
                  {item.payment_method
                    .split("_")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
                </td>
                <td className="px-3 py-4 text-white text-center">
                  Rp {item.item?.price.toLocaleString("id-ID")}
                </td>
                <td className="px-3 py-4 capitalize text-white text-center">
                  {item.courir}
                </td>
                <td className="px-3 py-4 text-white text-center">
                  {item.awb || "-"}
                </td>
                <td className="px-3 py-4 text-center">
                  <span
                    className={`px-4 py-2 text-sm tracking-wide capitalize rounded-full ${getStatusColor(
                      item.status
                    )} text-white`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center my-4 gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded ${
              currentPage === 1
                ? "bg-blue-400 text-gray-300 cursor-not-allowed"
                : "bg-blue-700 hover:bg-blue-800"
            } text-white`}
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-blue-400"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded ${
              currentPage === totalPages
                ? "bg-blue-400 text-gray-300 cursor-not-allowed"
                : "bg-blue-700 hover:bg-blue-800"
            } text-white`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
