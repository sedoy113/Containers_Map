export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
    this.errors.set(301, 'Ресурс перемещен навсегда')
      .set(400, 'Неверный запрос')
      .set(403, 'Доступ к ресурсу запрещен')
      .set(404, 'Ресурс не найден')
      .set(500, 'Внутренняя ошибка сервера')
      .set(502, 'Ошибка шлюза')
      .set(503, 'Служба недоступна');
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    return 'Unknown error';
  }
}
