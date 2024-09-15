import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";
import { fetchUser, fetchUsers } from "@/lib/actions/users.actions";

async function Page(){
    const user = await currentUser();
    if (!user) return null;
  
    const userInfo = await fetchUser(user.id);
    if (!userInfo?.onboarded) redirect("/onboarding");

    const result = await fetchUsers({
        userId: user.id,
        searchString: '',//searchParams.q,
        pageNumber: 1, //searchParams?.page ? + searchParams.page : 1,
        pageSize: 25,
      });

    return (
        <section>
            <h1 className="head-text mb-10">Search</h1>
            {/* Search Bar */}
            <div className='mt-14 flex flex-col gap-9'>
                {result.users.length === 0 ? (
                    <p className='no-result'>No Result</p>
                ) : (
                    <UserCard/>
                )
            </div>
        </section>
    )
}

export default Page;
