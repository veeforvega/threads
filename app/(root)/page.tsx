import { ClerkProvider, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <h1>Threads</h1>
      <h1 className="head-text text-left">Home</h1>
      {/* <ClerkProvider afterSignOutUrl="/">
        <UserButton />
      </ClerkProvider> */}
    </>
  )
}