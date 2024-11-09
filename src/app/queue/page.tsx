import Navbar from "@/components/navbar";

function Queue() {
    return <div>
    <h1 className = "headerpart"> YOU ARE</h1>
    </div>
}

function WhoIsInLine(){
    return <div>
        <h1 className = "headerpart"> YOU ARE</h1>
    </div>
}

export default function QueuePage() {
    return (
    <>
      <Navbar/>
      <Queue/>
    </>
  );
}
