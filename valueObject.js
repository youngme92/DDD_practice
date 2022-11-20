// 값 객체 예시
/** 
 * ### 값 객체 성질
 * - 변하지 않는다. -> fullName 값객체 내에 값을 변화시키는 메서드를 만들지 않는다.
 * - 주고받을수 있다. -> 새로 값객체를 생성하여 대입하는 방법으로 수정할 수 있다. 나머지는 방법으로 수정하지 않도록 한다.
 * - 등가성을 비교할 수 있다. -> 값 객체는 고유한 값이기 때문에 값의 값을 꺼내서 비교하는 방법을 옳지 않다. js 에서 값 비교하는 방법 객체 비교는 메모리 참조 된것을 비교하기 때문에 값속성이 같아도 같다고 표현하지않는다. 그래서 JSON.stringify 로 변환하여 비교하거나 애초에 값 생성한 객체는 고유하게 보고 대입을 통해 같도록 표시 해야한다.
 * ### 값 객체로 선정하는 기준 -> 규칙이 존재하는가, 낱개로 쓰이는가 -> Name 값 객체 생성
 */
 class Name {
    #value;
    constructor(value){
        if(!value) throw new Error('이름 생성에 오류가 발견되었습니다.');
        this.#value = value;
    }
    getName(){
        return this.#value;
    }
}
class FullName {
    #firstName;
    #lastName;
    #middleName;
    constructor(firstName, lastName, middleName){
        this.#firstName = new Name(firstName).getName()
        this.#lastName = new Name(lastName).getName()
        this.#middleName = new Name(middleName).getName()
    }
    getFirstName(){
        return this.#firstName;
    }
    getLastName(){
        return this.#lastName;
    }
    getMiddleName(){
        return this.#middleName;
    }
    Equals(other){
        if(!other) return;
        if(this === other) return true;
        return this.#firstName === other.getFirstName() 
                && this.#lastName === other.getLastName() 
                && this.#middleName === other.getMiddleName()
    }
}

//  값객체 조회
// console.log(new FullName('Y', "M"))
// console.log(new FullName('Y', "M","D").getFirstName())
// 값 객체 비교가능 한 예시 
// const A = new FullName('Y','M','D')
// const B = new FullName('Y','M','D')

// console.log(A.Equals(B))

/**
 * ### 행동이 정의된 값 객체
 * 덧셈을 설명할 수 있다.
 */
class Money {
    amount;
    currency;
    constructor(amount, currency){
        if(!currency) throw new Error('화폐단위를 입력해주세요.')
        this.amount = amount;
        this.currency = currency;
    }
    Add(money){
        if(!money) throw new Error('입력된 돈을 확인해주세요.')
        if(this.currency !== money.currency) throw new Error(`화폐단위가 다릅니다. ${this.currency}, ${money.currency}`)
        return new Money(this.amount + money.amount, this.currency);
    }
}
const A = new Money(500, 'won')
const B = new Money(500, 'won')

console.log(A.Add(B))
/** 값 객체 클래스를 생성했을때 장점
 * - 표현력 증가
 * - 무결성 유지
 * - 잘못된 대입 방지
 * - 로직이 이곳저곳 흩어지는 것 방지
 */