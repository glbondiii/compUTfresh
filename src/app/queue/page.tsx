import Navbar from "@/components/navbar";

function Queue(): JSX.Element {
    return <div>
    <h1 className = "headerpart"> YOU ARE</h1>
    </div>
}

function WhoIsInLine(): JSX.Element {
    return <div>
        <h1 className = "headerpart"> YOU ARE</h1>
    </div>
}

export default function QueuePage(): JSX.Element {
    return (
    <>
      <Navbar/>
      <Queue/>
    </>
  );
}
