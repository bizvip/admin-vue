import { useUserStore } from '@/store'

const role = name => {
  const userStore = useUserStore()
  return (userStore.roles && userStore.roles.includes(name)) || (userStore.roles && userStore.roles.includes('rooter'))
}

export default role