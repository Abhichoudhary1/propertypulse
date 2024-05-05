const apiDomain =  process.env.NEXT_PUBLIC_API_DOMAIN

async function fetchproperties() {
    try {
      if(!apiDomain){
        return[]
      } 
       
        const response = await fetch(`${apiDomain}/properties`)

        if (!response.ok) {
            throw new Error('failed to fetch data')
        }

        return response.json()
    } catch (error) {
        console.log(error)
        return []
    }


}

export { fetchproperties }