function memo(func: Function){
  const cache: { [key: string]: string; } = {};
    return function(...args: any){
      const key = JSON.stringify(args);
      if (cache[key]){
        console.log(cache)
        return cache[key];
      }
      else {
        const val = func.apply(null, args);
        cache[key] = val;
        return val; 
      }
  }
}

export default memo;