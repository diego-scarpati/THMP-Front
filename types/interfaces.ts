export type ApprovalStatus = "yes" | "no" | "pending"
export type EasyApplyStatus = "yes" | "no" | "pending"

// Job interface
export interface IJob {
  id: string
  title: string
  url: string
  referenceId?: string
  posterId?: string
  company: string
  location?: string
  type?: string
  postDate?: string
  benefits?: string
  approvedByFormula: ApprovalStatus
  approvedByGPT: ApprovalStatus
  easyApply: EasyApplyStatus
  jobDescription?: IJobDescription
  keywords?: IKeyword[]
  coverLetter?: ICoverLetter
}

// JobDescription interface
export interface IJobDescription {
  id: string
  state: string
  description: string
  companyApplyUrl?: string
  easyApplyUrl?: string
  workRemoteAllowed: boolean
  workPlace?: string
  formattedExperienceLevel?: string
  skills?: string
  job?: IJob
}

// Keyword interface
export interface IKeyword {
  id: number
  keyword: string
  jobs?: IJob[]
}

// CoverLetter interface
export interface ICoverLetter {
  id: string
  // Add any additional fields for CoverLetter if needed
  job?: IJob
}

// JobKeyword interface for the through table
export interface IJobKeyword {
  jobId: string
  keywordId: number
}

