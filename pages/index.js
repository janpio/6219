import {PrismaClient} from "@prisma/client"
export {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()

export default function Page(){
  // const foo = await prisma.post.findMany()
  return <div>Hello World</div>
}

