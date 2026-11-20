var sock = null;

function setUpRoomHostingConnection(url) {
    if (sock != null) {
        console.log("Already connected.");
        return
    }
    sock = new WebSocket(url);

    sock.addEventListener("open", (e) => {
        console.log("Recv " + e.data);
        const roomName = document.getElementById("room-name-input").value;
        const roomPassword = document.getElementById("room-password-input").value;

        if (roomName === "" || roomPassword === "") {
            console.log("Put stuf in all the boxes");
            sock.close();
            return;
        }

        console.log("Successfully connected to " + url);
        console.log("Trying to make to room " + roomName);
        sendMessageToServer({
            "head": "MAKE_ROOM",
            "data": {
                "name": roomName,
                "password": roomPassword,
            }
        })

    });

    sock.addEventListener("message", (e) => {
        console.log("Recv " + e.data);
    })

    sock.addEventListener("close", (e) => {
        console.log("Closing socket because of close request");
    })

    sock.addEventListener("error", (e) => {
        console.log("Error occured, resetting socket");
        sock = null;
    })
}

function sendMessageToServer(message) {
    if (sock != null) {
        jsonStr = JSON.stringify(message);
        console.log("Sent " + jsonStr);
        sock.send(jsonStr);
    }
} 

document.getElementById("host-room-button").addEventListener("click", (e) => {
    const url = document.getElementById("url-input").value;
    
    console.log("Attempting to set up room hosting at " + url);
    setUpRoomHostingConnection(url);
})