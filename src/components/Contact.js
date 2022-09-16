

const Contact = () => {
    return (
        <div name="Contact" className="h-screen w-full bg-gradient-to-t from-black via-black to-gray-900 text-white">

            <div className="max-w-screen-lg px-10 sm:px-4 mx-auto flex flex-col justify-center w-full h-full">

                <div className="sm:mt-20 pb-8">
                    <p className="text-2xl md:text-4xl font-bold"><span className="text-[#fff559]">02. </span>Contact me</p>
                    <br />
                    <p className="text-gray-400 text-l sm:text-xl mt-2 text-justify">Have any questions for me? Use the form below!</p>
                </div>

                <div className="flex justify-center items-center">

                    <form action="https://getform.io/f/b2fd7330-de80-457a-8155-3b8052ec0c9b" className="flex flex-col w-full md:w-1/2" method="POST">
                        <input type="text" name="name" placeholder="Your name" className="p-2 bg-transparent
                         border-2 border-gray-500 rounded-md text-white focus:outline-none" />
                        <input type="text" name="email" placeholder="Your Email" className="p-2 my-4 bg-transparent
                         border-2 border-gray-500 rounded-md text-white focus:outline-none" />

                        <textarea name="message" placeholder="Your Message" rows="5" className="p-2 bg-transparent
                         border-2 border-gray-500 rounded-md text-white focus:outline-none"></textarea>

                        <button className=" text-[#fff559] bg-transparent border-2 border-[#fff559] uppercase  shadow-xl gap-1 duration-300 hover:bg-[#fff559]/20 py-3 px-5 rounded-md mx-auto my-8">Send message</button>
                    </form>

                </div>

            </div>

        </div>
    )
}

export default Contact