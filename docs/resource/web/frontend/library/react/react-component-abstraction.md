---
title: react 컴포넌트와 추상화
tag: [frontend, react, component]
---
## 예시 코드
```typescript
export interface Props {
  className?: string;
  placeholder?: string;
  onChange: ({ value }: { value: string }) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onKeyDown?: (ev: KeyboardEvent<HTMLInputElement>) => void;
  value?: string;
  disabled?: boolean;
}

function TextInput(
  {
    className,
    placeholder,
    onChange,
    onFocus,
    onBlur,
    onKeyDown,
    value = '',
    disabled = false,
  }: Props
) {
  const [text, setText] = useState(value);

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const value = ev.target.value;
    setText(value);
    onChange({ value });
  };

  return (
    <input
      type='text'
      value={text}
      className={className}
      placeholder={placeholder}
      onChange={handleChange}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      disabled={disabled}
    />
  );
}

export default TextInput;
```
- 예시로 사용되는 텍스트 입출력 컴포넌트

## 컴포넌트와 추상화
- 컴포넌트란 무엇인가?
  - 시각적인 부분을 적절하게 나눈 것
- 컴포넌트를 적절하게 나눈다는 것은? => 책임
  - SRP원칙 즉, 하나의 컴포넌트는 하나의 책임(행동)만을 담당하는 것이 좋다
  - `컴포넌트를 적절하게 나눈다는 것 = 컴포넌트의 책임을 적절하게 나눈다는 것`

## 범용적인 컴포넌트
- Application 데이터를 기준으로 보면 컴포넌트는 크게 2가지로 나눌 수 있다.
  1. 도메인과 상관 없는 범용적인 컴포넌트
  2. 도메인에 종속된 비즈니스 컴포넌트

### (1) 도메인에 종속되지 말자
- 특정 도메인과의 결합도를 낮추고, 재사용성을 높이는 것이 중요하다.
- 많은 역할을 수행하지 않도록 주의
- 만약 예시로 들었던 TextInput 컴포넌트를 특정 도메인에 따라 분기처리를 한다면?
  - 특정 도메인을 위한 분기 코드가 생기고, TextInput 컴포넌트는 변경에 취약해질 수 있다 (변경을 위해서는 분기 케이스를 고려해야한다)
  - 분기 처리 추가 가능성
  - 특정 도메인을 위한 props 데이터가 추가될 가능성.
  - 컴포넌트 테스트를 위한 많은 테스트 케이스가 필요해진다.
- 분기 처리를 할 것이 아니고 여러 도메인에서 공통으로 사용하는 기능을 기반으로 컴포넌트를 만들 것.

### (2) 합성을 활용하자
- 도메인 의존성과 별개로 컴포넌트 자체의 책임이 너무 크다면?
  - 컴포넌트를 쪼개서 합성하는 것을 추천
  - 단, 무분별한 쪼개기는 가독성을 안 좋게 만든다.
  - props만으로 컴포넌트를 만드는 것을 최우선으로
```typescript
// prop 추가로 복잡해진 카드 컴포넌트
const CardItem = ({ 
  imageUrl, 
  tagNumber, 
  name,
  description,
  rounded,
  lineCnt,
  className,
  ...
}: Props) => {
  ...
  return (
    <div className={className}>
      {imageUrl && <img src={imageUrl} style={rounded ? { borderRadius: '50%' } : undefined}/>}
      <div>
        <span>{tagNumber}</span>
        <span>{name}</span>
      </div>
      {description && <div>...</div>}
      ...
    </div>
  );
}

...


  const CardThumbnail = ({ url, size, rounded, className }: Props) => ...
  const CardBody = ({ className, align, children }: Props) => ...
  const CardTitle = ({ className, lineCnt, children }: Props) => ...
  const CardIcon = () => ...

  const RoundCardItem = (...) => {
    return (
            <div>
                <CardThumbnail url={imageUrl} rounded />
                <CardBody align='center'>
                <CardTitle>{tagNumber}</CardTitle>
                <CardTitle lineCnt={2}>{name}</CardTitle>
                </CardBody>
            </div>
            )
  }
...
```

## 도메인과 컴포넌트
- 도메인과 의존성을 가진, 비즈니스 로직을 실행하는 컴포넌트도 필요하다.
- 단, 너무 많은 컴포넌트가 도메인에 얽히지 않도록 주의

### 커스텀 훅
- React 훅을 활용하면 비즈니스 로직을 추상화하기 좋다
- 훅을 사용하여 비즈니스 로직을 추상화하면 여러 컴포넌트에서 비즈니스 로직을 수행할 수도 있고
- 비즈니스 로직 코드가 컴포넌트에서 빠지기 때문에 컴포넌트 가독성도 좋아진다.
- 컴포넌트와 도메인의 결합도를 낮추는 효과까지

## 상태 관리와 데이터
- 상태 관리를 위해 Redux, Recoil, MobX같은 라이브러리를 사용한다.
- 적절한 라이브러리도 중효하지만 핵심은 상태 관리 메커니즘 안에서 데이터간의 의존성을 낮추는 것

## Reference
- [React 컴포넌트와 추상화](https://fe-developers.kakaoent.com/2022/221020-component-abstraction/)
