
const Search = () => {
    return (
        <div className=" max-w-5xl mx-auto my-10">
            <div className="flex flex-col md:flex-row lg:flex-row gap-20">
                <h2 className="text-3xl text-center md:text-left lg:ml-10 lg:w-96">Sign up and get exclusive special deals</h2>
                <div>
                    <input type="text" name="q" id="query" placeholder=""
                        className="w-96 p-2 rounded-xl border border-none rounded-r-none  focus:outline-none  dark:bg-gray-500 dark:text-gray-300 dark:border-none " />
                    <button
                        className="inline-flex items-center gap-2 bg-[#1B88F4] text-white text-lg font-semibold py-[6.5px] px-6 rounded-r-md">
                        <span>search</span>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Search;