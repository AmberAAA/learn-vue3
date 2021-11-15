type Key = string | Symbol

const trackList: Set<Key> = new Set();

function trak (propertyKey: Key) {
  if (!trackList.has(propertyKey)) {
    console.log(`检测到${propertyKey}被依赖，现在将它推入Set中`)
    trackList.add(propertyKey)
  }
};

function trigger (propertyKey: Key) {
  console.log(`检测到${propertyKey}被查询，现在判断它是否被依赖`);
  if (trackList.has(propertyKey)) {
    console.log(`${propertyKey}被依赖了，需要更新数值`);
    cal()
  } else {
    console.log(`${propertyKey}并没有被依赖，一切安好。`)
  }
};


const data = {
  a: 1,
  b: 2,
  c: 3
};


const $data = new Proxy(data, {
  get: function (target, propertyKey) {
    trak(propertyKey)
    return Reflect.get(target, propertyKey)
  },
  set: function (target, propertyKey, value) {
    Reflect.set(target, propertyKey, value);
    trigger(propertyKey);
    return true;
  }
})

// @ts-ignore
window.$data= $data

function effect () {
  return $data.a + $data.b;
};


const cal = () => {
  console.log(`a + b = ${effect()}`)
}

cal()
