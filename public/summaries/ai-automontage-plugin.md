# Summary: AutoCut для Adobe Premiere

Статья описывает AutoCut как будущий Adobe Premiere Pro UXP-плагин. Главная идея: панель внутри Premiere читает active sequence/selection, собирает `analysis_job.json`, передает задачу локальному AutoCut Bridge, а Python/Audio Atlas Core считает RMS/VAD/WhisperX-события и возвращает `markers_payload.json`. Первый MVP — marker-only: ставить маркеры тишины, речи и review-зон без автоматического удаления фрагментов.
