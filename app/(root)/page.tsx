import { ClerkProvider, UserButton } from "@clerk/nextjs";

export default async function Home() {

  // const results = await fetchPosts();

  return (
    <>
      <h1 className="head-text text-left">Home</h1>
      {/* <ClerkProvider afterSignOutUrl="/">
        <UserButton />
      </ClerkProvider> */}
    </>
  )
}