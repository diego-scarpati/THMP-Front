import type React from "react"
import { IJob } from "../../types/interfaces"

interface JobCardProps {
  job: IJob
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="h-[70px] max-w-[800px] mx-5 my-[10px] pl-5 pr-[10px] py-[10px] rounded-[15px] flex justify-between items-center bg-white shadow-md">
      <div className="flex-1">
        <h3 className="font-semibold text-lg truncate">{job.title}</h3>
        <p className="text-sm text-gray-600 truncate">{job.company}</p>
      </div>
      <div className="flex-shrink-0 mx-2">
        <p className="text-sm text-gray-500">{job.location || "Location N/A"}</p>
        <p className="text-sm text-gray-500">{job.type || "Type N/A"}</p>
      </div>
      <div className="flex-shrink-0 text-right">
        <p className="text-sm text-gray-500">{job.postDate || "Date N/A"}</p>
        <button className="text-sm bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 transition-colors">
          View Details
        </button>
      </div>
    </div>
  )
}

export default JobCard

