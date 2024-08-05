import Link from "next/link";




export default function Navbar(){
    return(
        <div style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            height: "100px",
            backgroundColor: "#1877f2"
        }}>
            <Link href="./home" style={{color:"white",fontSize:"20px", textDecoration:"none",fontWeight:"bold"}}>Home</Link>
            <Link href="./contactus" style={{color:"white",fontSize:"20px", textDecoration:"none",fontWeight:"bold"}}>Contact us</Link>
            <Link href="./services" style={{color:"white",fontSize:"20px", textDecoration:"none",fontWeight:"bold"}}>Services</Link>
            <Link href="./aboutus" style={{color:"white",fontSize:"20px", textDecoration:"none",fontWeight:"bold"}}>About us</Link>
        </div>
    )
}