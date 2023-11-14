import Link from "next/link";

export default function MobileNotFound() {
  return (
    <div className="hidden lg:flex lg:flex-col w-full h-screen justify-center items-center">
        <div>
            <span className="text-red-600 text-9xl font-bold shado">
                404
            </span>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-base font-normal pb-1">
            صفحه فوق یافت نشد 
          </p>
          <div className="pt-3 text-center">
            <Link href="/" className="border px-4 py-2 rounded-lg text-base font-bold text-red-600 border-red-600 shadow-md hover:bg-red-600 hover:text-white duration-300">
              برگشت
            </Link>
          </div>
        </div>
    </div>
  )
}
