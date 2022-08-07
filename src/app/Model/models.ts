export interface login {
  userName: string | null,
  password: string | null,
};

export interface formInfo {
  title: string | null,
  description: string | null
};


export interface multiChoiceOptions {
  ques: string | null;
  options: string [];
}
