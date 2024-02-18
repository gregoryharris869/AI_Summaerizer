import { copy, linkIcon, loader, tick } from "../assets";

const Demo = () => {
  return (
    <section className="w-full max-w-xl mt-16">
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex items-center justify-center"
          onSubmit={() => {}}
        >
          <img
            src={linkIcon}
            alt="link_icon"
            className="absolute left-0 w-5 my-2 ml-3"
          />
          {/* Search Field */}
          <input
            type="url"
            placeholder="Enter URL"
            value=""
            onChange={() => {}}
            required
            className="url_input peer"
          />
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
          >
            ⏎
          </button>
        </form>
        {/* browse URL History */}
      </div>
      {/* Display results */}
    </section>
  );
};
export default Demo;
