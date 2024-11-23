# Text Analyzer Challenge

This is a React-based text analysis application challenge that provides insights about input text. 

Web Application : 
[https://text-analyzer-challenge.aimanhaziq.my/](https://text-analyzer-challenge.aimanhaziq.my/)


## Technologies Used

- React
- Vite
- Jest for testing
- CSS for styling
- Docker
- Traefik
- Github CI/CD


## Setup and Running the Application in development

1. Clone the repository:

```
git clone url
```

2. Install Dependencies : 

```
npm install
```

3. Run the development server : 
 
```
npm run dev
```

4. Open browser and navigate to  `http://localhost:5173`


## Building for production

1. Build the project first : 

```
npm run build
```

2. The project will be generated in `dist` directory. Run the project with : 

```
npm run serve
```

3. Access the project in `http://localhost:4173`


## Build with docker

1. Within the root folder, build the docker image first :

```
docker build -t text-analyzer .
```

2. Then run the docker image in a container with : 

```
docker run -p 3300:3300 text-analyzer-challenge:latest
```

3. Access the project with `http://localhost:3800`


## Build with traefik 

1. The Traefik labels are defined in the `docker-compose.yml` file. This setup assumes that Traefik is already running on ports 80 and 443, and is connected to the 'web' network in Docker.

```
docker build -t text-analyzer .
```

2. Change the `docker-compose.yml` as what you want like :

```
services:
  **container-name**:
    container_name: **container-name**
    image: text-analyzer:latest
    restart: unless-stopped
    ports:
      - **"3500:3500"**
    labels:
      - traefik.enable=true
      - traefik.http.routers.**intended-name**.entrypoints=web,websecure
      - traefik.http.routers.**intended-name**.tls=true
      - traefik.http.routers.**intended-name**.tls.certresolver=lets-encrypt
      - traefik.http.services.**intended-name**.loadbalancer.server.port=**3500**
      - traefik.http.routers.**intended-name**.rule=Host(**`intended-name.domain.com`**)
    networks:
      - web
```

3. Then run the docker-compose : 

```
docker-compose up -d
```

3. Access the project with your own domain configured before. 


## Approach to the Problem

The core functionality of this text analyzer is implemented in the hook (`src/hooks/useTextAnalysis.jsx`). Here is the overview : 


1. **State Management**: Use React's `useState` hook to manage the input text and analysis results.

2. **Memoization**: To optimize performance, `useMemo` is used for computational operations:
   - Word analysis such as word count, most frequent word, longest word
   - Sentence analysis
   - Paragraph analysis

3. **Text Analysis**:
   - Words are split and filtered to count and analyze.
   - Sentences are identified by splitting on punctuation.
   - Paragraphs are identified by splitting on double newlines.

4. **Sentiment Analysis**: A simple sentiment analysis is implemented by using predefined lists of positive and negative words. If none of the positive or negative is match then it is "Neutral".

5. **Real-time Updates**: The `useEffect` hook is used to update the analysis results on input text changes.

6. **Performance Optimization**: The `useMemo` and `useCallback` is used for expensive computations. It only trigger when necessary.

7. **Modularity**: The analysis logic is encapsulated in a custom hook, making it easy to reuse and test.



