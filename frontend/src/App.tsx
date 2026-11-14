import { useEffect, useState } from 'react'

type HealthResponse = {
  status: string
  service: string
  time: string
}

function App() {
  const [health, setHealth] = useState<HealthResponse | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('http://localhost:8081/api/health')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json() as Promise<HealthResponse>
      })
      .then(setHealth)
      .catch((err) => setError(err.message))
  }, [])

  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>RVMS 연결 확인</h1>
      {error && <p style={{ color: 'crimson' }}>백엔드 연결 실패: {error}</p>}
      {!error && !health && <p>백엔드 응답 대기 중...</p>}
      {health && (
        <ul>
          <li>status: {health.status}</li>
          <li>service: {health.service}</li>
          <li>time: {health.time}</li>
        </ul>
      )}
    </main>
  )
}

export default App
