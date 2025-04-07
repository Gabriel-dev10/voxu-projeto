import ChatList from '@/components/ChatLista';
import ChatWindow from '@/components/ChatJanela';

export default function Mensagens() {
  return (
    <div className="flex h-screen w-full">
      <ChatList />
      <ChatWindow />
    </div>
  )
}
