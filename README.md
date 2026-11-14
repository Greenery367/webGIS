# webGIS — 가상 선박 모니터링 시스템

실시간 GIS·IoT 모니터링 시스템을 직접 구현해보려고 시작한 개인 사이드 프로젝트입니다. 가상의 선박 1척에서 센서 데이터를 만들어 수집·저장하고, 지도 위에서 실시간으로 보여주며, 육상 서버와 동기화하는 시스템을 혼자 구현합니다.

자세한 요구사항·설계는 [`가상 연구선 모니터링 시스템 개발사양서.md`](./가상%20연구선%20모니터링%20시스템%20개발사양서.md) 참고.

## 구성

| 폴더 | 내용 |
| --- | --- |
| `backend/` | Spring Boot 4 + Java 17. REST·WebSocket API |
| `frontend/` | Vite + React + TypeScript. MapLibre GL JS 기반 실시간 지도 |

시뮬레이터·수집기(NMEA 0183)는 Python으로 별도 구현 예정이며, DB는 PostgreSQL + PostGIS + TimescaleDB를 쓸 예정입니다.

## 로컬 실행

### backend

```
cd backend
./mvnw spring-boot:run
```

기본 포트 `8081`(로컬 환경에서 8080이 다른 프로세스와 겹쳐 변경). 헬스체크: `GET /api/health`

### frontend

```
cd frontend
npm install
npm run dev
```

`http://localhost:5173`. 개발 중에는 백엔드(`localhost:8081`)로 CORS 허용되어 있습니다.

## 진행 상황

- [x] Spring Boot 백엔드 뼈대 + 헬스체크
- [x] Vite/React 프런트엔드 뼈대 + 백엔드 연결 확인
- [ ] PostgreSQL + PostGIS + TimescaleDB 연동
- [ ] NMEA 시뮬레이터(Python)
- [ ] 실시간 지도·항적 표시 (MapLibre + PMTiles)
- [ ] 선박→육상 동기화
