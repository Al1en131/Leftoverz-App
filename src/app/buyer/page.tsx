import Image from "next/image";
import Link from "next/link";

export default function BuyerHome() {
  return (
    <div className="bg-[#080B2A]  items-center justify-items-center min-h-screen ">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          width={100}
          height={100}
          alt=""
          src="/images/bubble.svg"
          className="lg:h-[356px] lg:w-[356px] max-lg:w-52 max-lg:h-72 absolute top-0 left-0"
        />
        <Image
          width={100}
          height={100}
          alt=""
          src="/images/bubble-2.svg"
          className="lg:h-[356px] lg:w-[356px] max-lg:w-52 max-lg:h-72 absolute top-0 right-0"
        />
        <Image
          width={100}
          height={100}
          alt=""
          src="/images/Vector.svg"
          className="lg:h-[678px] lg:w-[514.09px] max-lg:h-44 max-lg:w-52 absolute top-28 right-0 -z-0"
        />
        <Image
          width={100}
          height={100}
          alt=""
          src="/images/Star-1.svg"
          className="w-8 absolute top-28 max-lg:right-20 right-26 -z-0"
        />
        <Image
          width={100}
          height={100}
          alt=""
          src="/images/Star-1.svg"
          className="w-4 absolute lg:top-28 max-lg:top-20 lg:right-96 max-lg:left-10 -z-0"
        />
        <Image
          width={100}
          height={100}
          alt=""
          src="/images/Star-1.svg"
          className="w-4 absolute lg:top-44 lg:left-56 max-lg:right-5 max-lg:top-72 -z-0"
        />
        <Image
          width={100}
          height={100}
          alt=""
          src="/images/Star-1.svg"
          className="w-4 absolute top-36 lg:left-[550px] max-lg:hidden -z-0"
        />
        <div className="lg:flex lg:justify-between max-lg:justify-center max-lg:w-full items-center pt-28 lg:px-20 max-lg:px-6 max-lg:text-center text-left">
          <div className="lg:w-1/2 max-lg:w-full block lg:space-y-4 max-lg:space-y-1">
            <h1 className="lg:text-8xl max-lg:text-5xl leading-14 font-bold text-[#15BFFD]">
              Left
              <span className="text-white">overz</span>
            </h1>
            <p className="lg:text-4xl max-lg:text-xl font-bold">
              Barang Bekas Kos dengan Harga Terjangkau dan Kualitas Terjamin
            </p>
            <p className="text-lg max-lg:text-base leading-6">
              Jual beli barang bekas kos yang masih layak pakai dan berkualitas.
              Hemat uang, dapatkan barang yang kamu butuhkan, dan bantu kurangi
              sampah.
            </p>
            <div className="flex gap-4 pt-4">
              <Link
                href="/auth/register"
                className="bg-[#15BFFD] px-4 py-3 max-lg:py-1 max-lg:px-3 text-center text-white lg:w-36 rounded-full hover:bg-transparent hover:text-[#15BFFD] hover:border-2 hover:border-[#15BFFD]"
              >
                Logout
              </Link>
            </div>
          </div>
          <div className="z-50 w-1/2 max-lg:hidden flex">
            <Image
              width={100}
              height={10}
              alt=""
              src="/images/hero.svg"
              className="z-40 w-full max-lg:hidden"
            />
          </div>
        </div>
        <div className="lg:justify-between max-lg:justify-center lg:px-20 max-lg:px-6 max-lg:py-6 max-lg:space-y-4 lg:flex max-lg:block items-center relative lg:mb-10 max-lg:mb-0 w-full">
          <Image
            width={100}
            height={100}
            alt=""
            src="/images/bubble-3.svg"
            className="lg:h-[456px] lg:w-[456px] max-lg:h-72 max-lg:w-72 absolute lg:top-60 max-lg:bottom-0 -z-0 left-0"
          />
          <Image
            width={100}
            height={100}
            alt=""
            src="/images/bubble-4.svg"
            className="lg:h-[356px] lg:w-[356px] max-lg:w-72 max-lg:h-72 absolute -top-28 -z-0 right-0"
          />
          <Image
            width={100}
            height={100}
            alt=""
            src="/images/Star-1.svg"
            className="w-4 absolute -top-10 lg:right-96 max-lg:right-24 -z-0"
          />
          <Image
            width={100}
            height={100}
            alt=""
            src="/images/Star-1.svg"
            className="w-5 absolute top-28 right-48 max-lg:hidden opacity-20 -z-0"
          />
          <Image
            width={100}
            height={100}
            alt=""
            src="/images/Star-1.svg"
            className="w-5 absolute top-20 right-20 opacity-20 max-lg:hidden -z-0"
          />
          <Image
            width={100}
            height={100}
            alt=""
            src="/images/Star-1.svg"
            className="w-4 absolute top-10 opacity-20 left-56 max-lg:hidden -z-0"
          />
          <Image
            width={100}
            height={100}
            alt=""
            src="/images/Star-1.svg"
            className="w-4 absolute top-56 opacity-20 left-[850px] max-lg:hidden -z-0"
          />
          <div className="absolute inset-0 bg-white opacity-5 z-10"></div>
          <div className="relative z-50 lg:w-2/4 max-lg:w-full text-white max-lg:text-center max-lg:justify-center">
            <h4 className="lg:text-5xl max-lg:text-4xl font-bold pb-4">
              Why Choose Us?
            </h4>
            <p className="text-lg max-lg:text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <button className="bg-[#15BFFD] px-4 mt-4 py-3 text-center text-white w-36 rounded-full hover:bg-transparent hover:text-[#15BFFD] hover:border-2 hover:border-[#15BFFD]">
              About Us
            </button>
          </div>
          <div className="lg:w-2/4 z-50 max-lg:w-full lg:flex lg:justify-end">
            <Image
              width={100}
              height={100}
              alt=""
              src="/images/hero-2.svg"
              className="lg:h-[456px] max-lg:h-60 w-full"
            />
          </div>
        </div>
        <div className="lg:p-20 max-lg:p-6 w-full relative">
          <Image
            width={100}
            height={100}
            alt=""
            src="/images/bubble-5.svg"
            className="lg:h-[456px] lg:w-[456px] max-lg:h-72 max-lg:w-72 absolute z-0 -bottom-20 left-0"
          />
          <Image
            width={100}
            height={100}
            alt=""
            src="/images/Star-1.svg"
            className="w-8 absolute top-40 right-10 -z-0"
          />
          <Image
            width={100}
            height={100}
            alt=""
            src="/images/Star-1.svg"
            className="w-4 absolute lg:bottom-6 lg:right-96 max-lg:right-10 max-lg:bottom-0 -z-0"
          />
          <Image
            width={100}
            height={100}
            alt=""
            src="/images/Star-1.svg"
            className="w-4 absolute lg:top-20 max-lg:top-0 lg:left-56 max-lg:left-28 -z-0"
          />
          <div className="text-center justify-center z-50">
            <h3 className="text-3xl font-bold text-white">Features</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
            <div className="lg:pt-14 max-lg:pt-8 lg:flex lg:justify-between max-lg:justify-center max-lg:w-full max-lg:block max-lg:space-y-4 items-center">
              <div className="border_section bg-transparent h-[350px] text-white rounded-xl p-5 lg:w-80 max-lg:w-full shadow-lg relative">
                <Image
                  width={100}
                  height={10}
                  alt=""
                  src="/images/camera.svg"
                  className="z-50 w-full h-3/4"
                />
                <div className="mt-4 h-1/4">
                  <p className="text-lg font-semibold">Pencarian Visual</p>
                </div>
              </div>
              <div className="border_section bg-transparent h-[350px] text-white rounded-xl p-5 lg:w-80 max-lg:w-full shadow-lg relative">
                <Image
                  width={100}
                  height={10}
                  alt=""
                  src="/images/Bag.svg"
                  className="z-50 w-full h-3/4"
                />
                <div className="mt-4 h-1/4">
                  <p className="text-lg font-semibold">
                    Pembayaran Auto Verfication
                  </p>
                </div>
              </div>
              <div className="border_section bg-transparent h-[350px] text-white rounded-xl p-5 lg:w-80 max-lg:w-full shadow-lg relative">
                <Image
                  width={100}
                  height={10}
                  alt=""
                  src="/images/Home.svg"
                  className="z-50 w-full h-3/4"
                />
                <div className="mt-4 h-1/4">
                  <p className="text-lg font-semibold">
                    Terintegrasi dengan pengiriman
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:px-20 lg:pb-20 max-lg:px-6 max-lg:pb-6 w-full">
          <div className="flex flex-col items-center justify-center relative">
            <Image
              width={100}
              height={100}
              alt=""
              src="/images/Star-1.svg"
              className="w-4 absolute -bottom-8 lg:right-96 max-lg:right-11 -z-0"
            />
            <Image
              width={100}
              height={100}
              alt=""
              src="/images/Star-1.svg"
              className="w-4 absolute top-20 lg:left-56 max-lg:left-10 -z-0"
            />
            <Image
              width={100}
              height={100}
              alt=""
              src="/images/Star-1.svg"
              className="w-4 absolute lg:top-6 lg:right-20 max-lg:right-14 max-lg:top-4 -z-0"
            />
            <Image
              width={100}
              height={100}
              alt=""
              src="/images/Star-1.svg"
              className="w-8 absolute lg:top-10 max-lg:top-16 right-5 -z-0"
            />
            <div className="pb-12 text-center">
              <h3 className="text-3xl font-bold text-white">How It Work?</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
            <div className="relative w-full">
              <div className="lg:px-20 max-lg:px-6 space-y-10">
                <div className="relative md:flex max-lg:justify-center max-lg:w-full md:justify-end">
                  <div className="relative lg:w-[580px] max-lg:-w-full p-5 text-black rounded-2xl border_style shadow-md bg-white/5">
                    <p className="text-xl font-bold mb-1 text-blue-400">
                      1. Login atau Registrasi
                    </p>
                    <p className="text-white text-lg">
                      Pengguna dapat login jika sudah memiliki akun atau
                      melakukan registrasi dengan mengisi data seperti nama,
                      email, dan password.
                    </p>
                  </div>
                </div>
                <div className="relative md:flex max-lg:block max-lg:justify-center md:justify-start">
                  <div className="relative lg:w-[580px] max-lg:-w-full p-5 text-black rounded-2xl border_style shadow-md bg-white/5">
                    <p className="text-xl font-bold mb-1 text-blue-400">
                      2. Mencari Barang
                    </p>
                    <p className="text-white text-lg">
                      Gunakan fitur pencarian dan filter untuk menemukan barang
                      yang diinginkan, lalu klik produk untuk melihat detailnya.
                    </p>
                  </div>
                </div>
                <div className="relative md:flex max-lg:block max-lg:justify-center md:justify-end">
                  <div className="relative lg:w-[580px] max-lg:-w-full p-5 text-black rounded-2xl border_style shadow-md bg-white/5">
                    <p className="text-xl font-bold mb-1 text-blue-400">
                      3. Memesan Barang
                    </p>
                    <p className="text-white text-lg">
                      Klik &apos;Beli&apos; atau tambahkan ke favorit jika ingin
                      membeli lebih dari satu barang, lalu lanjutkan ke
                      checkout.
                    </p>
                  </div>
                </div>
                <div className="relative md:flex max-lg:block max-lg:justify-center md:justify-start">
                  <div className="relative lg:w-[580px] max-lg:-w-full p-5 text-black rounded-2xl border_style shadow-md bg-white/5">
                    <p className="text-xl font-bold mb-1 text-blue-400">
                      4. Mengisi Detail Pemesanan
                    </p>
                    <p className="text-white text-lg">
                      Periksa pesanan, pilih metode pembayaran (transfer,
                      e-wallet, atau COD), lalu konfirmasi pesanan.
                    </p>
                  </div>
                </div>
                <div className="relative md:flex max-lg:block max-lg:justify-center md:justify-end">
                  <div className="relative lg:w-[580px] max-lg:-w-full p-5 text-black rounded-2xl border_style shadow-md bg-white/5">
                    <p className="text-xl font-bold mb-1 text-blue-400">
                      5. Pembayaran & Verifikasi Otomatis
                    </p>
                    <p className="text-white text-lg">
                      Lakukan pembayaran sesuai instruksi. Sistem akan otomatis
                      memverifikasi tanpa perlu unggah bukti.
                    </p>
                  </div>
                </div>
                <div className="relative md:flex max-lg:block max-lg:justify-center md:justify-start">
                  <div className="relative lg:w-[580px] max-lg:-w-full p-5 text-black rounded-2xl border_style shadow-md bg-white/5">
                    <p className="text-xl font-bold mb-1 text-blue-400">
                      6. Mengambil atau Menerima Barang
                    </p>
                    <p className="text-white text-lg">
                      Tunggu barang dikirim sesuai estimasi waktu, lalu
                      konfirmasi penerimaan dan beri ulasan setelah barang
                      sampai.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:px-20 lg:pb-20 max-lg:px-6 max-lg:pb-6 w-full justify-center relative">
          <Image
            width={100}
            height={100}
            alt=""
            src="/images/bubble-6.svg"
            className="lg:w-[456px] max-lg:w-72 absolute -top-44 left-0 -z-0"
          />
          <Image
            width={100}
            height={100}
            alt=""
            src="/images/bubble-7.svg"
            className="lg:w-[456px] max-lg:w-72 absolute -bottom-10 right-0 -z-0"
          />
          <Image
            width={100}
            height={100}
            alt=""
            src="/images/Star-1.svg"
            className="w-8 absolute top-44 right-20 max-lg:hidden -z-0"
          />
          <div className="pb-12 text-center">
            <h3 className="text-3xl font-bold text-white">
              Newly Added Product
            </h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
          </div>
          <div className="md:flex justify-center w-full max-lg:space-y-4 gap-10 z-50 items-center">
            <div className="md:w-80 max-lg:w-full p-6 rounded-xl border_section shadow-lg bg-white/5 relative">
              <div className="mb-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-gray-300 rounded-full"></span>
                  <p className="text-blue-400 font-semibold">James Watson</p>
                </div>
                <button className="bg-[#15BFFD] px-6 py-1 text-center text-white rounded-lg hover:bg-transparent hover:text-[#15BFFD] hover:border-2 hover:border-[#15BFFD]">
                  Beli
                </button>
              </div>
              <div className="mb-5">
                <Image
                  width={100}
                  height={100}
                  alt=""
                  src="/images/hero-2.jpg"
                  className="w-full rounded-2xl "
                />
              </div>
              <div className="mt-4">
                <h3 className="text-white text-lg font-bold">
                  Punk Art Collection
                </h3>
                <p className="text-blue-400 text-base">Jakarta</p>
              </div>
            </div>
            <div className="md:w-80 max-lg:w-full p-6 rounded-xl border_section shadow-lg bg-white/5 relative">
              <div className="mb-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-gray-300 rounded-full"></span>
                  <p className="text-blue-400 font-semibold">James Watson</p>
                </div>
                <button className="bg-[#15BFFD] px-6 py-1 text-center text-white rounded-lg hover:bg-transparent hover:text-[#15BFFD] hover:border-2 hover:border-[#15BFFD]">
                  Beli
                </button>
              </div>
              <div className="mb-5">
                <Image
                  width={100}
                  height={100}
                  alt=""
                  src="/images/hero-2.jpg"
                  className="w-full rounded-2xl "
                />
              </div>
              <div className="mt-4">
                <h3 className="text-white text-lg font-bold">
                  Punk Art Collection
                </h3>
                <p className="text-blue-400 text-base">Jakarta</p>
              </div>
            </div>
            <div className="md:w-80 max-lg:w-full p-6 rounded-xl border_section shadow-lg bg-white/5 relative">
              <div className="mb-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-gray-300 rounded-full"></span>
                  <p className="text-blue-400 font-semibold">James Watson</p>
                </div>
                <button className="bg-[#15BFFD] px-6 py-1 text-center text-white rounded-lg hover:bg-transparent hover:text-[#15BFFD] hover:border-2 hover:border-[#15BFFD]">
                  Beli
                </button>
              </div>
              <div className="mb-5">
                <Image
                  width={100}
                  height={100}
                  alt=""
                  src="/images/hero-2.jpg"
                  className="w-full rounded-2xl "
                />
              </div>
              <div className="mt-4">
                <h3 className="text-white text-lg font-bold">
                  Punk Art Collection
                </h3>
                <p className="text-blue-400 text-base">Jakarta</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <button className="bg-[#15BFFD] px-4 py-3 text-center text-white w-36 rounded-full hover:bg-transparent hover:text-[#15BFFD] hover:border-2 hover:border-[#15BFFD]">
              Next
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
