

const Contact = () => {
    return (
        <div name="Contact" className="h-screen w-full bg-gradient-to-b from-gray-800 via-black to-[#272727] text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold">Contact me</p>
                    <p className="text-xl">Submit form below</p>
                </div>

                <div className="flex justify-center items-center">
                    <form action="https://getform.io/f/b2fd7330-de80-457a-8155-3b8052ec0c9b" className="flex flex-col w-full md:w-1/2" method="POST">
                        <input type="text" name="name" placeholder="Your name" className="p-2 bg-transparent
                         border-2 rounded-md text-white focus:outline-none" />
                        <input type="text" name="email" placeholder="Your Email" className="p-2 my-4 bg-transparent
                         border-2 rounded-md text-white focus:outline-none" />

                        <textarea name="message" placeholder="Your Message" rows="10" className="p-2 bg-transparent
                         border-2 rounded-md text-white focus:outline-none"></textarea>

                        <button className="text-white bg-gradient-to-b from-slate-500 to-blue-600 py-3 px-5 rounded-md mx-auto my-8">Send message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact