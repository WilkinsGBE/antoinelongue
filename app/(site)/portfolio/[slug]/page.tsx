import Section from '../../components/Section';
import Lightbox from '../../components/Lightbox';
import { getProject } from '@/lib/data';
import BackButton from '../../components/BackButton';

export async function generateStaticParams(){
  const { readdirSync } = await import('fs');
  const { join } = await import('path');
  const dir = join(process.cwd(), 'content/projects');
  return readdirSync(dir).map(f=>({ slug: f.replace(/\.json$/, '') }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }){
  const { slug } = await params;
  const project = getProject(slug);

  return (
    <Section>
      <div className="max-w-4xl mx-auto">
        <BackButton />
        <h1 className="h1">{project.title}</h1>
        <p className="p mt-2">{project.location} • {project.date}</p>
        {project.summary && (<p className="p mt-4">{project.summary}</p>)}
        <div className="h-4"/>
        <Lightbox images={project.gallery} />
      </div>
    </Section>
  );
}
