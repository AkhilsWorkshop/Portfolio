import loading from "../assets/Images/Loading/loading.gif"

const Loading = () => {
    return (
        <div>
            <div className="flex justify-center items-center bg-black min-h-screen">
                <img src={loading} alt="Loading Site" className="h-32 lg:h-40" />
            </div>
        </div>
    )
}

export default Loading
