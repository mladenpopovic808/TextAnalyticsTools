

//interfejsi



export interface LanguageDetectionResponse{
  detectedLangs:DetectedLanguage[]
}
export interface SentimentAnalysisResponse{
  text:String
  sentiment:Sentiment
}
export interface TextSimilarityResponse{
  similarity:number
}
export interface EntityExtractionResponse{
  text:string
  annotations:[]

}
export class EntityClass{
  title: string = ''
  abstract: string = ''
  categories: [] = []
  image: ImageClass = new ImageClass

}

/////klase

export class ImageClass{


  thumbnail:string=''


}



export class DetectedLanguage{
  lang:String=''
  confidence:number=0
}
export class Sentiment{
  score:number=-10
  type:string=''
}
export class Transaction {
  constructor(date: string, time: string, method: string, url: string) {
    this.date = date
    this.time = time
    this.method = method
    this.url = url
  }
  date: string
  time: string
  method: string
  url: string
}

