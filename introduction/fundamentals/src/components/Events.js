const Events = () => {

    const handleMyEvent = (e) => {
        console.log('Activate event');
        console.log(e);
    }

    const renderSomething = (x) => {
        if(x) {
            return <h1>Render this</h1>
        }else {
            return <h1>I also add render this!</h1>
        }
    }

    return (
        <div>
            <div>
                {/* We cannot put braket because we don't want that function has been execute before the inicialization */}
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>

            <div>
                <button onClick={() => console.log("clicked")}>Click here also</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events;