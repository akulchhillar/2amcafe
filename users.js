const supabaseclient = supabase.createClient('https://labywyyrykkgrnoskefd.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxhYnl3eXlyeWtrZ3Jub3NrZWZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU3MDgwNzAsImV4cCI6MjA1MTI4NDA3MH0.kR5ZwbueWfr8UjG7TiL0KzZlmsTpCv_hY_ytyl2Z1NA');
const roomOne = supabaseclient.channel('room_01')
  const userStatus = {
  user: 'user-1',
  online_at: new Date().toISOString(),
}


export let num_users;

  roomOne
  .on('presence', { event: 'sync' }, () => {
    const newState = roomOne.presenceState()
    console.log('synchh', Object.keys(newState).length)

    document.getElementById('users').innerHTML = Object.keys(newState).length


    num_users = Object.keys(newState).length
    return num_users
   
  }).subscribe(async (status)=>{
    if (status !== 'SUBSCRIBED') { return }
const presenceTrackStatus = await roomOne.track(userStatus)

  })

 
