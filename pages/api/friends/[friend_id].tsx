import { NextApiRequest, NextApiResponse } from "next";

type Friend = {
  id: number,
  firstName: string,
  lastName: string,
  sex: "MEN" | "WOMEN",
  age: number,
  description: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const friendId = req.query.friend_id

  const friendList: Friend[] = [
    {
      id: 1,
      firstName: "Taro",
      lastName: "Yamada",
      sex: "MEN",
      age: 24,
      description: "はじめまして！野球部でキャッチャーやってます！みんなで騒ぐの大好き！よろしく！"
    },
    {
      id: 2,
      firstName: "Hanako",
      lastName: "Tanaka",
      sex: "WOMEN",
      age: 24,
      description: "はじめまして。田中花子といいます。吹奏楽部で部長を務めてさせてもらっています。人見知りですが仲良くしてください。"
    }
  ]

  const friend: Friend | undefined = friendList.find((friend) => friend.id === Number(friendId))
  console.log("API取得処理開始")
  console.log(`friendId: ${friendId}`)
  console.group('取得結果');
  console.log(`id: ${friend?.id}`);
  console.log(`firstName: ${friend?.firstName}`);
  console.log(`lastName: ${friend?.lastName}`);
  console.log(`sex: ${friend?.sex}`);
  console.log(`age: ${friend?.age}`);
  console.log(`description: ${friend?.description}`);
  console.groupEnd();
  res.status(200).json({ friend })
}
