import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="flex flex-col items-center justify-center w-full">
      <nav className="flex items-center justify-between w-full pt-3 mb-10">
        <img src={logo} alt="sumz_logo" className="object-contain w-28" />
        <button
          type="button"
          onClick={() => window.open()}
          className="black_btn"
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        {" "}
        Simplify reading with Summize, a open-source article summarizer that
        transforms lengthy articles into clear and concise summaries.
      </h2>
    </header>
  );
};

export default Hero;
