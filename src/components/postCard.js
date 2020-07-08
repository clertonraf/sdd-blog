import React from "react";
import { Link } from "gatsby"
import Tags from "./tags"

const PostCard = ({ node }) =>
<div key={node.fields.slug}>
  <div className="post-card">
    <header>
      <small>
        {new Date(node.frontmatter.date)
          .toLocaleDateString(
            "de-DE",
            { month: "long", year: "numeric", day: "2-digit"}
          )
        }
      </small>
      <h1>
        <Link to={node.fields.slug}>
          {node.frontmatter.title || node.fields.slug}
        </Link>
      </h1>
    </header>
    <Tags tags={node.frontmatter.tags}/>
  </div>
</div>

export default PostCard
