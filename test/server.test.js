
const http = require('http');

describe('Server Test', () => {
  test('Server should respond with Hello MEPHI!', (done) => {
    const req = http.request('http://localhost:3000', (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        expect(res.statusCode).toBe(200);
        expect(data).toBe('Hello MEPHI!\n');
        done();
      });
    });
    
    req.on('error', (err) => {
      done(err);
    });
    
    req.end();
  });
});

function expect(value) {
  return {
    toBe: (expected) => {
      if (value !== expected) {
        throw new Error(`Expected ${expected}, but got ${value}`);
      }
    }
  };
}

function describe(name, fn) {
  console.log(`\n${name}:`);
  fn();
}

function test(name, fn) {
  try {
    fn((err) => {
      if (err) {
        console.log(`${name}: FAILED - ${err.message}`);
      } else {
        console.log(`${name}: PASSED`);
      }
    });
  } catch (err) {
    console.log(`${name}: FAILED - ${err.message}`);
  }
}

// Запуск тестов если файл запущен напрямую
if (require.main === module) {
  describe('Server Tests', () => {
    test('Server should respond with Hello MEPHI!', (done) => {
      const req = http.request('http://localhost:3000', (res) => {
        let data = '';
        res.on('data', (chunk) => {
          data += chunk;
        });
        res.on('end', () => {
          try {
            expect(res.statusCode).toBe(200);
            expect(data).toBe('Hello MEPHI!\n');
            console.log('All tests passed!');
            process.exit(0);
          } catch (err) {
            console.log(`Test failed: ${err.message}`);
            process.exit(1);
          }
        });
      });
      
      req.on('error', () => {
        console.log('Could not connect to server');
        process.exit(1);
      });
      
      req.end();
    });
  });
}