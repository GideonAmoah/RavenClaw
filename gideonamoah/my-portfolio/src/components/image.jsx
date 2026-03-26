export default function Img(){
    return(
      <div class="flex flex-col gap-2 p-8 mt-15">
  <img class="  rounded w-100 h-100 ml-20" src="/public/portfolio.jpeg" alt="" />
  <div class="space-y-2 text-center">
    <div class="space-y-0.5">
      <p class="text-lg font-semibold text-white">Gideon Amoah</p>
      <p class="font-medium text-gray-500">frontend Developer</p>
    </div>
    <button class="border border-purple-200 text-white px-4 py-2 rounded  hover:bg-purple-600 hover:text-white hover:shadow-lg transform hover:scale-105 transition bg-green-800">
  Message
</button>
  </div>
</div>
    )
}