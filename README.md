# Web Worker
- 웹 워커는 웹 컨텐츠를 위해서 백그라운드 스레드에서 스크립트를 실행할 간편한 방법을 제공합니다.
- 워커 스레드는 사용자 인터페이스(UI)를 방해하지 않고 작업을 수행할 수 있습니다. 
- 또한 워커는 ( responseXML 과 channel속성이 언제나 null이지만) XMLHttpRequest 를 사용하여 I/O작업을 수행할 수도 있습니다. 
- 워커는 생성이 된 후에 생성자가 명시한 이벤트 핸들러로 메세지를 올려서 자신의 하위 작업(spawning task)에 메세지를 전달할 수 도 있습니다.
