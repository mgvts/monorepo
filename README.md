simple example monorepo microfront architecure for lectore 05.04.25 in itmo

build proj 
```
npm i

cd .\packages\react-remote\
npm i
npx vite build
npx vite preview

cd ..
cd .\vue-remote\
npm i
npx vite build
npx vite preview

cd ..
cd .\container\
npm i
npx vite build
npx vite preview
```

- on localhost:5001 will be vue app
- on localhost:5002 will be react app
- on localhost:5000 will be container (facade) with both remotes
