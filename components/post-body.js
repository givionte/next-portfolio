import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import RichTextAsset from "./rich-text-asset";

const customMarkdownOptions = (content) => {
  return {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => (
        <RichTextAsset
          id={node.data.target.sys.id}
          assets={content.links.assets.block}
        />
      ),
    },
  };
};

export default function PostBody({ content }) {
  return (
    <div>
      <div>
        {documentToReactComponents(
          content.json,
          customMarkdownOptions(content.json.content)
        )}
      </div>
    </div>
  );
}
