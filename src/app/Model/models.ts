export interface login {
  userName: string | null,
  password: string | null,
};

export interface formInfo {
  title: string | null,
  description: string | null
};


export interface multiChoiceOptions {
  title: formInfo | null,
  quesType: string | null,
  ques: string | null,
  options: string []
};

export interface linearScaleQuestion {
  title: formInfo | null,
  quesType: string | null,
  ques: string | null,
  description: string | null,
  range: number[] | null,
  labelRight: string | null,
  labelLeft: string | null
};


export interface adminUser {

  name: string | null,
  email: string | null,
  role: string | null,
  lastLogin: string | null,
  status: boolean | null
}


