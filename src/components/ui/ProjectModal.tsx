import { Icon } from '@iconify/react';
import { useState } from 'react';
import Image from 'next/image';
import { SkillType } from '@/lib/types';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectModalProps {
    name: string;
    demos: {
        title: string;
        image: string;
        description?: string;
    }[];
    github?: string;
    live?: string;
    other?: { name: string; url: string }[];
    description?: string;
    techStack?: SkillType[];
    architecture?: {
        image: string;
        description?: string;
    };
    onClose: () => void;
}

const ProjectModal = ({
    name,
    demos,
    github,
    live,
    other,
    description,
    techStack,
    architecture,
    onClose
}: ProjectModalProps) => {
    const [selectedVideo, setSelectedVideo] = useState(0);

    const links = Boolean(github || live || other)

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 p-4"
            >
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="bg-bg-secondary dark:bg-zinc-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                >
                    <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                            <h2 className="text-xl font-semibold text-dark-2 w-full text-center">{name}</h2>
                            <button
                                onClick={onClose}
                                className="text-text hover:text-accent transition-colors duration-200"
                            >
                                <Icon icon="tabler:x" width={24} height={24} />
                            </button>
                        </div>

                        {/* Project Description */}
                        {description && (
                            <div className="space-y-2 mb-6">
                                <h3 className="text-dark-2 font-medium">Description</h3>
                                <p className="text-text whitespace-pre-wrap">{description}</p>
                            </div>
                        )}

                        {/* Project Links */}
                        {links && (
                            <div className="space-y-2 mb-6">
                                <h3 className="text-dark-2 font-medium">Links</h3>
                                <div className="flex flex-wrap gap-2">
                                    {github && (
                                        <a
                                            href={github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-bg-primary text-text hover:bg-accent/10 transition-colors duration-200"
                                        >
                                            <Icon icon="mdi:github" width={20} height={20} />
                                            <span>GitHub</span>
                                        </a>
                                    )}
                                    {live && (
                                        <a
                                            href={live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-bg-primary text-text hover:bg-accent/10 transition-colors duration-200"
                                        >
                                            <Icon icon="mdi:web" width={20} height={20} />
                                            <span>Live Demo</span>
                                        </a>
                                    )}
                                    {other?.map((link, index) => (
                                        <a
                                            key={index}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-bg-primary text-text hover:bg-accent/10 transition-colors duration-200"
                                        >
                                            <Icon icon="mdi:link" width={20} height={20} />
                                            <span>{link.name}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Tech Stack */}
                        {techStack && techStack.length > 0 && (
                            <div className="space-y-2 mb-6">
                                <h3 className="text-dark-2 font-medium">Tech Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {techStack.map((tech, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-bg-primary text-text"
                                        >
                                            <Icon icon={tech.icon} width={20} height={20} />
                                            <span>{tech.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Architecture */}
                        {architecture && (
                            <div className="space-y-2 mb-6">
                                <h3 className="text-dark-2 font-medium">Architecture</h3>
                                <div className="relative aspect-video rounded-lg overflow-hidden bg-bg-primary">
                                    <Image
                                        src={architecture.image}
                                        alt="Project Architecture"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                {architecture.description && (
                                    <p className="text-text text-sm mt-2 whitespace-pre-wrap">{architecture.description}</p>
                                )}
                            </div>
                        )}

                        {Boolean(demos.length) &&
                            <div className="space-y-6">
                                {/* Video List */}
                                <div className="space-y-2">
                                    <h3 className="text-dark-2 font-medium mb-2">Videos</h3>
                                    <div className="space-y-2">
                                        {demos?.map((demo, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setSelectedVideo(index)}
                                                className={`w-full text-left p-4 rounded-lg transition-colors duration-200 ${selectedVideo === index
                                                    ? 'bg-accent text-white'
                                                    : 'bg-bg-primary text-text hover:bg-accent/10'
                                                    }`}
                                            >
                                                <div className="font-medium">{demo.title}</div>
                                                {demo.description && (
                                                    <div className={`text-sm mt-1 ${selectedVideo === index ? 'text-white/80' : 'text-text/70'
                                                        }`}>
                                                        {demo.description}
                                                    </div>
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Selected Video */}
                                <div className="space-y-2">
                                    <h3 className="text-dark-2 font-medium">{demos[selectedVideo].title}</h3>
                                    <div className="relative aspect-video rounded-lg overflow-hidden">
                                        <iframe
                                            src={demos[selectedVideo].image.replace('shorts/', 'embed/')}
                                            title={demos[selectedVideo].title}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="absolute inset-0 w-full h-full"
                                        />
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProjectModal;
