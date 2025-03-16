import Image from "next/image";




export default function Home() {
  return (
    <div className="grid bg-red-500 grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
    style={{
      backgroundImage: "url(/test.jpg)",
      backgroundSize: "cover",
    }}>
      this is my first project my chsnhrsdfsd sd f sdf sd f
      <div>

        <input type="date" />
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
     <input type="text" />
     <button>Add this</button >
    </div>
    </div>
  );
}
