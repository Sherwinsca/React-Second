import classes from '../main.module.css'
const Home = () => {

     const userImage = {
        "userAvatar": "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
    }

     const userDataList = [
        {"channelName": "Quafi Khan", "subscribers": "20k"},
        {"channelName": "John Doe", "subscribers": "7k"},
        {"channelName": "Samuel James", "subscribers": "28k"}
    ];

     const channelStyle = {
        color: "#f53505"
    }


    return userDataList.map(item => {
        return (
            // external css
            <div className={classes.CardStyle}>
                {/*Inline css*/}
                <h1> User Card </h1>
                <img style={{height: "150px", width: "300px",borderRadius: "20px"}} src={userImage.userAvatar}
                     alt="user card"></img>
                {/*Internal css*/}
                <h2 style={channelStyle}>{item.channelName} </h2>
                <p className={classes.subscribers}>{`${item.subscribers} Subscribers`}</p>
                <span className={classes.priceWrapper}>
                    <p className={classes.actualPrice}> Rs. 1799 </p>
                    <strike><p className={classes.mrp}> Rs. 3999 </p></strike>
                    <p className={classes.discount}> (55% OFF) </p>
                </span>
            </div>
        );
    });
}
export default Home;
