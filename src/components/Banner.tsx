import { BannerContainer } from "../styles/Banner";

export function Banner() {
  return (
    <BannerContainer>
      <img src='https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHRlY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=1296&q=60' alt='Vertical aligned green chevrons in black background' />
      <p>
        Photo by <a href="https://unsplash.com/@markusspiske?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Markus Spiske</a> on <a href="/s/photos/programming?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      </p>
    </BannerContainer>
  )
}