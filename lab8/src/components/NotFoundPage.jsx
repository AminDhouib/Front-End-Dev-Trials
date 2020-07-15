import React from "react";

function NotFoundPage() {
  return (
    <div className="bg-black NotFoundPage">
            <img
              className=""
              src={require("../assets/404.png")}
              alt="404"
              style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)'
              }}/>
    </div>
  );
}

export default NotFoundPage;
