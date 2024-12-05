const { Script, OP, LockingScript, UnlockingScript, Utils } = require('@bsv/sdk');

class MathPuzzleTemplate {
  lock() {
    const s = new Script();
    // Your code here

    return new LockingScript(s.chunks);
  }

  unlock() {
    const s = new Script();
    // Your code here

    return {
      sign: (tx, inputIndex) => new Promise((resolve) => {
        resolve(new UnlockingScript(s.chunks));
      }),
      estimateLength: (tx, inputIndex) => new Promise((resolve) => {
        resolve(2);
      }),
    };
  }
}

class OpReturnTemplate {
  lock(data) {
    const script = [
      { op: OP.OP_FALSE },
      { op: OP.OP_RETURN },
    ];

    if (typeof data === 'string') {
      data = [data];
    }

    for (const entry of data.filter(Boolean)) {
      const arr = Utils.toArray(entry, 'utf8');
      script.push({ op: arr.length, data: arr });
    }

    return new LockingScript(script);
  }

  unlock() {
    throw new Error('Unlock is not supported for OpReturn scripts');
  }
}


module.exports = {
  OpReturnTemplate,
  MathPuzzleTemplate
}
