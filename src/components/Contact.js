

const Contact = () => {
    return (
        <div name="Contact" className="h-screen w-full bg-gradient-to-b from-fifth via-black to-black text-secondary">

            <div className="max-w-screen-lg px-10 py-20 sm:px-4 mx-auto flex flex-col justify-center w-full h-full gap-7">

                <div className="sm:mt-20 flex items-center"
                    data-aos="fade-right"
                    data-aos-delay="100"
                    data-aos-once="true">
                    <p className="text-2xl md:text-3xl font-bold"><span className="text-primary">04. </span>Questions?</p>
                    <div className="hidden sm:flex bg-third/30 h-[0.01rem] w-1/3 ml-5"></div>
                </div>

                <div className="flex flex-col justify-center items-center gap-5"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-once="true">
                    <p className="text-lg sm:text-xl text-justify">Feel free to reach me out!</p>
                    <form action={process.env.REACT_APP_FORM} className="flex flex-col w-full md:w-1/2" method="POST">
                        <input type="text" name="name" placeholder="Your name" className="p-2 bg-transparent
                         border-2 border-sixth bg-fifth rounded-md text-secondary" required />
                        <input type="text" name="email" placeholder="Your Email" className="p-2 my-4 bg-transparent
                         border-2 border-sixth bg-fifth rounded-md text-secondary" required />

                        <textarea name="message" placeholder="Your Message" rows="3" className="p-2 bg-transparent
                         border-2 border-sixth bg-fifth rounded-md text-secondary" required></textarea>

                        <button className=" text-primary bg-transparent border-2 border-primary uppercase  shadow-xl gap-1 duration-300 hover:bg-primary/20 py-3 px-5 rounded-md mx-auto my-8">Send message</button>
                    </form>

                </div>

            </div>

        </div>
    )
}

export default Contact