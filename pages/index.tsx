import Head from "next/head";

export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen py-2 "
      style={{     
        backgroundImage: `url(../bg.jpeg)`,
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"}}
    >
      <Head>
        <title>Buyed</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center z-3">
        <h1 className="text-6xl font-bold text-slate-100">Welcome to Buyed!</h1>

        <p className="mt-3 text-2xl text-slate-100">We are under construction</p>

        <p className="mt-3 text-2xl text-slate-100">
          Please subscribe to get more information about the new products
        </p>

        <form className="mt-3" action="https://buyedemail.pcamino.workers.dev" method="post">
          <input
            className="w-full p-2 border-2 border-gray-400 rounded-lg"
            type="email"
            placeholder="Your email"
          />
          <button className="mt-3 w-full p-2 border-2 border-gray-400 rounded-lg bg-blue-500 text-white">
            Subscribe
          </button>
        </form>
      </main>

      <footer className="flex items-center justify-center w-full h-24 text-slate-100">
        <a
          className="flex items-center justify-center"
        >
          Powered by Buyed LLC
        </a>
      </footer>
    </div>
  );
}