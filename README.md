Проект для практики настройки GitHub Actions CI/CD пайплайна.

## Структура
- `src/server.js` - HTTP сервер
- `test/server.test.js` - простые тесты
- `.github/workflows/main.yml` - конфигурация GitHub Actions

## Как работает
1. При push в main или PR запускается workflow
2. Тестирование на Ubuntu, Windows и macOS
3. Симуляция деплоя при успешных тестах