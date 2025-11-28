export default function Agencies() {
  return (
    <section id="all-news" className="bg-blue-400 py-12 mt-12 rounded-md"> <br /><br />
      <h2 className="text-4xl text-center text-white underline font-serif">Big News Agencies</h2>
<div className="flex flex-col md:flex-row gap-8 justify-evenly items-center mt-8 px-4">

        <div className="text-center align-middle">
          <iframe src="https://www.jagran.com/" className="w-[300px] h-[400px] border" title="jagran"></iframe>
          <h4 className="text-black text-xl font-serif mt-3">
            Dainik Jagran
            <a href="https://www.jagran.com/" className="block underline">Click Here</a>
          </h4>
        </div>

        <div className="text-center">
          <iframe src="https://www.foxnews.com/" className="w-[300px] h-[400px] border" title="fox"></iframe>
          <h4 className="text-black text-xl font-serif mt-3">
            Fox News
            <a href="https://www.foxnews.com/" className="block underline">Click Here</a>
          </h4>
        </div>

        <div className="text-center">
          <iframe src="https://www.ndtv.com/" className="w-[300px] h-[400px] border" title="ndtv"></iframe>
          <h4 className="text-black text-xl font-serif mt-3">
            NDTV
            <a href="https://www.ndtv.com/" className="block underline">Click Here</a>
          </h4>
        </div>
      </div>
    </section>
  );
}
